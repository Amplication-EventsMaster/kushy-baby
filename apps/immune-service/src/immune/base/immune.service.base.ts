/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Immune, Patient } from "@prisma/client";

export class ImmuneServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ImmuneCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImmuneCountArgs>
  ): Promise<number> {
    return this.prisma.immune.count(args);
  }

  async findMany<T extends Prisma.ImmuneFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImmuneFindManyArgs>
  ): Promise<Immune[]> {
    return this.prisma.immune.findMany(args);
  }
  async findOne<T extends Prisma.ImmuneFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImmuneFindUniqueArgs>
  ): Promise<Immune | null> {
    return this.prisma.immune.findUnique(args);
  }
  async create<T extends Prisma.ImmuneCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImmuneCreateArgs>
  ): Promise<Immune> {
    return this.prisma.immune.create<T>(args);
  }
  async update<T extends Prisma.ImmuneUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImmuneUpdateArgs>
  ): Promise<Immune> {
    return this.prisma.immune.update<T>(args);
  }
  async delete<T extends Prisma.ImmuneDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImmuneDeleteArgs>
  ): Promise<Immune> {
    return this.prisma.immune.delete(args);
  }

  async getPatient(parentId: string): Promise<Patient | null> {
    return this.prisma.immune
      .findUnique({
        where: { id: parentId },
      })
      .patient();
  }
}
