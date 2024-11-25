import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { DatabaseModule } from '../../database/database.module';
import { CreatePaymentUseCase } from '../../../domain/application/use-cases/create-payment';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [DatabaseModule, CqrsModule], // Garanta que o módulo CQRS esteja importado
  controllers: [PaymentsController],
  providers: [CreatePaymentUseCase], // Certifique-se de adicionar o CreatePaymentUseCase aqui
})
export class PaymentsModule {}
