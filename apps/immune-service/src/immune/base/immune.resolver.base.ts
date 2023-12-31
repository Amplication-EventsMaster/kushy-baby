/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateImmuneArgs } from "./CreateImmuneArgs";
import { UpdateImmuneArgs } from "./UpdateImmuneArgs";
import { DeleteImmuneArgs } from "./DeleteImmuneArgs";
import { ImmuneCountArgs } from "./ImmuneCountArgs";
import { ImmuneFindManyArgs } from "./ImmuneFindManyArgs";
import { ImmuneFindUniqueArgs } from "./ImmuneFindUniqueArgs";
import { Immune } from "./Immune";
import { Patient } from "../../patient/base/Patient";
import { ImmuneService } from "../immune.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Immune)
export class ImmuneResolverBase {
  constructor(
    protected readonly service: ImmuneService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Immune",
    action: "read",
    possession: "any",
  })
  async _immunesMeta(
    @graphql.Args() args: ImmuneCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Immune])
  @nestAccessControl.UseRoles({
    resource: "Immune",
    action: "read",
    possession: "any",
  })
  async immunes(@graphql.Args() args: ImmuneFindManyArgs): Promise<Immune[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Immune, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Immune",
    action: "read",
    possession: "own",
  })
  async immune(
    @graphql.Args() args: ImmuneFindUniqueArgs
  ): Promise<Immune | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Immune)
  @nestAccessControl.UseRoles({
    resource: "Immune",
    action: "create",
    possession: "any",
  })
  async createImmune(@graphql.Args() args: CreateImmuneArgs): Promise<Immune> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        patient: args.data.patient
          ? {
              connect: args.data.patient,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Immune)
  @nestAccessControl.UseRoles({
    resource: "Immune",
    action: "update",
    possession: "any",
  })
  async updateImmune(
    @graphql.Args() args: UpdateImmuneArgs
  ): Promise<Immune | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          patient: args.data.patient
            ? {
                connect: args.data.patient,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Immune)
  @nestAccessControl.UseRoles({
    resource: "Immune",
    action: "delete",
    possession: "any",
  })
  async deleteImmune(
    @graphql.Args() args: DeleteImmuneArgs
  ): Promise<Immune | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Patient, {
    nullable: true,
    name: "patient",
  })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  async resolveFieldPatient(
    @graphql.Parent() parent: Immune
  ): Promise<Patient | null> {
    const result = await this.service.getPatient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
