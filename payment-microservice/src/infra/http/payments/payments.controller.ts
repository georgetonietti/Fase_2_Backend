import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentUseCase } from '../../../domain/application/use-cases/create-payment';
import { PaymentPresenter } from '../../database/prisma/presenters/payment-presenter';
import { z } from 'zod';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePaymentDto, PaymentResponseDto } from './dto/create-payment-dto';

const createPaymentBodySchema = z.object({
  dia: z.number().min(1).max(31),
  mes: z.number().min(1).max(12),
  ano: z.number(),
  codAss: z.string(),
  valorPago: z.number(),
});

type CreatePaymentBodySchema = z.infer<typeof createPaymentBodySchema>;

@ApiTags('pagamentos')
@Controller('/registrarpagamento')
export class PaymentsController {
  constructor(private createPayment: CreatePaymentUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Registra o pagamento' })
  @ApiBody({ type: CreatePaymentDto })
  @ApiResponse({
    status: 201,
    description: 'Pagamento registrado com sucesso!',
    type: PaymentResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async create(@Body() body: CreatePaymentBodySchema) {
    const { dia, mes, ano, codAss, valorPago } =
      createPaymentBodySchema.parse(body);

    const dataPagamento = new Date(ano, mes - 1, dia);

    const result = await this.createPayment.execute({
      codAssinatura: codAss,
      valorPago,
      dataPagamento,
    });

    if (result.isLeft()) {
      throw new BadRequestException(result.value.message);
    }

    const { pagamento } = result.value;

    return {
      pagamento: PaymentPresenter.toHTTP(pagamento),
    };
  }
}
