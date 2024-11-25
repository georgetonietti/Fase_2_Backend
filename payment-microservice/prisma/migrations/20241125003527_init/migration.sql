-- CreateTable
CREATE TABLE "pagamentos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cod_assinatura" TEXT NOT NULL,
    "valor_pago" REAL NOT NULL,
    "data_pagamento" DATETIME NOT NULL
);
