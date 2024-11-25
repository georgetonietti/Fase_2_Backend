import { PrismaService } from '../prisma-service';
import { Pagamento } from '../../../../domain/entities/pagamentos';
import { PagamentoRepository } from '../../../../domain/application/repositories/pagamentos-repository';
import { PrismaPagamentoMapper } from '../mapper/prisma-pagamento-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaPagamentoRepository implements PagamentoRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Pagamento): Promise<Pagamento> {
    const payment = await this.prisma.pagamento.create({
      data: {
        codAssinatura: data.codAssinatura,
        valorPago: data.valorPago,
        dataPagamento: data.dataPagamento,
      },
    });

    return PrismaPagamentoMapper.toDomain(payment);
  }
}
