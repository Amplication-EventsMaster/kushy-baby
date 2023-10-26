import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ImmuneService } from "./immune.service";
import { ImmuneControllerBase } from "./base/immune.controller.base";

@swagger.ApiTags("immunes")
@common.Controller("immunes")
export class ImmuneController extends ImmuneControllerBase {
  constructor(
    protected readonly service: ImmuneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
