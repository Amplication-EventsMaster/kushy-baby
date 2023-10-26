import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImmuneServiceBase } from "./base/immune.service.base";

@Injectable()
export class ImmuneService extends ImmuneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
