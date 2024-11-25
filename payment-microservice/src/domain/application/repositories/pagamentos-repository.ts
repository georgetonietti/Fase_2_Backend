import { Pagamento } from '../../entities/pagamentos';

export abstract class PagamentoRepository {
  abstract create(pagamento: Pagamento): Promise<Pagamento>;
}
