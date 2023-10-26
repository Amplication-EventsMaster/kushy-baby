/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PatientService } from "../patient.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PatientCreateInput } from "./PatientCreateInput";
import { PatientWhereInput } from "./PatientWhereInput";
import { PatientWhereUniqueInput } from "./PatientWhereUniqueInput";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientUpdateInput } from "./PatientUpdateInput";
import { Patient } from "./Patient";
import { ImmuneFindManyArgs } from "../../immune/base/ImmuneFindManyArgs";
import { Immune } from "../../immune/base/Immune";
import { ImmuneWhereUniqueInput } from "../../immune/base/ImmuneWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PatientControllerBase {
  constructor(
    protected readonly service: PatientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Patient })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: PatientCreateInput): Promise<Patient> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        dateOfBirth: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Patient] })
  @ApiNestedQuery(PatientFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Patient[]> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        dateOfBirth: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        dateOfBirth: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() data: PatientUpdateInput
  ): Promise<Patient | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          dateOfBirth: true,
          id: true,
          name: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          dateOfBirth: true,
          id: true,
          name: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/immunes")
  @ApiNestedQuery(ImmuneFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Immune",
    action: "read",
    possession: "any",
  })
  async findManyImmunes(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Immune[]> {
    const query = plainToClass(ImmuneFindManyArgs, request.query);
    const results = await this.service.findImmunes(params.id, {
      ...query,
      select: {
        createdAt: true,
        date: true,
        id: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/immunes")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async connectImmunes(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: ImmuneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      immunes: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/immunes")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async updateImmunes(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: ImmuneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      immunes: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/immunes")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async disconnectImmunes(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: ImmuneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      immunes: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
