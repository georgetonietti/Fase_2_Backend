import { Entity } from '../../core/entities/entity';
import { UniqueEntityCodigo } from '../../core/entities/unique-entity-codigo';

export interface PagamentosProps {
  codAssinatura: string;
  valorPago: number;
  dataPagamento: Date;
}

export class Pagamento extends Entity<PagamentosProps> {
  get codAssinatura() {
    return this.props.codAssinatura;
  }

  get valorPago() {
    return this.props.valorPago;
  }

  get dataPagamento() {
    return this.props.dataPagamento;
  }

  static create(props: PagamentosProps, codigo?: UniqueEntityCodigo) {
    return new Pagamento(props, codigo);
  }

  toString() {
    return `Pagamento(id: ${this.codigo}, codAssinatura: ${this.codAssinatura}, valorPago: ${this.valorPago}, dataPagamento: ${this.dataPagamento.toISOString()})`;
  }
}
