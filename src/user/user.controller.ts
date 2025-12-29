import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ){}

  @Post()
  createUser(
    @Body() createUserDto: CreateUserDto
  ) {
    return this.userService.createUser(createUserDto);
  }
 
  @Get(':username')
  async findByUsername(@Param('username') username: string) {
    return this.userService.findByUsername(username);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}