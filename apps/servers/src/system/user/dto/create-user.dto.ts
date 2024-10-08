import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: "用户账号" })
  @IsString({ message: "username 类型错误，正确类型 string" })
  @IsNotEmpty({ message: "username 不能为空" })
  @MinLength(5, { message: "账号至少5个字符" })
  @MaxLength(20, { message: "账号最多20个字符" })
  readonly username: string;

  @ApiProperty({ description: "密码" })
  @IsString({ message: "password 类型错误，正确类型 string" })
  @IsNotEmpty({ message: "password 不能为空" })
  password: string;

  @ApiProperty({ description: "手机号", required: false })
  @IsString({ message: "phone 类型错误，正确类型 string" })
  @IsMobilePhone("zh-CN", { strictMode: false }, { message: "请输入正确的手机号" })
  @IsOptional()
  // @IsPhoneNumber('CH', { message: '请输入正确的手机号' })
  readonly phone?: string;

  @ApiProperty({ description: "邮箱", required: false })
  @IsString({ message: "email 类型错误，正确类型 string" })
  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @ApiProperty({ description: "确认密码" })
  @IsString({ message: " confirmPassword 类型错误，正确类型 string" })
  readonly confirmPassword: string;

  @ApiProperty({ description: "头像", required: false })
  @IsString({ message: "avatar 类型错误，正确类型 string" })
  @IsOptional()
  readonly avatar?: string;
}

export class CreateUserByAdminDto {
  @ApiProperty({ description: "用户账号" })
  @IsString({ message: "username 类型错误，正确类型 string" })
  @IsNotEmpty({ message: "username 不能为空" })
  @MinLength(5, { message: "账号至少5个字符" })
  @MaxLength(20, { message: "账号最多20个字符" })
  readonly username: string;

  @ApiProperty({ description: "密码" })
  @IsString({ message: "password 类型错误，正确类型 string" })
  @IsOptional()
  password?: string;

  @ApiProperty({ description: "手机号", required: false })
  @IsString({ message: "phone 类型错误，正确类型 string" })
  @IsMobilePhone("zh-CN", { strictMode: false }, { message: "请输入正确的手机号" })
  @IsOptional()
  // @IsPhoneNumber('CH', { message: '请输入正确的手机号' })
  readonly phone?: string;

  @ApiProperty({ description: "邮箱", required: false })
  @IsString({ message: "email 类型错误，正确类型 string" })
  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @ApiProperty({ description: "头像", required: false })
  @IsString({ message: "avatar 类型错误，正确类型 string" })
  @IsOptional()
  avatar?: string;

  @ApiProperty({ description: "角色 id 集合", required: false })
  @IsString({ each: true, message: "角色id集合中存在类型错误，正确类型 string[]" })
  @IsOptional()
  roleIds?: string[];
}
