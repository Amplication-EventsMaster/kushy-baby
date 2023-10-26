import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ImmuneModuleBase } from "./base/immune.module.base";
import { ImmuneService } from "./immune.service";
import { ImmuneController } from "./immune.controller";
import { ImmuneResolver } from "./immune.resolver";

@Module({
  imports: [ImmuneModuleBase, forwardRef(() => AuthModule)],
  controllers: [ImmuneController],
  providers: [ImmuneService, ImmuneResolver],
  exports: [ImmuneService],
})
export class ImmuneModule {}
