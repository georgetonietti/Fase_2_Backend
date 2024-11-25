// import { Injectable } from '@nestjs/common';
// import { PrismaService } from './infra/prisma.service';

// @Injectable()
// export class AssinaturasValidasService {
//   constructor(private readonly prisma: PrismaService) {}

//   async verificarValidade(codAssinatura: string): Promise<boolean> {
//     const assinatura = await this.prisma.assinaturaValida.findFirst({
//       where: { codAssinatura }
//     });

//     if (!assinatura) {
//       return false;
//     }

//     return assinatura.validUntil > new Date();
//   }
// }
