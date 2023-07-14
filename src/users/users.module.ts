import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { JwtGuard } from './auth/jwt.guard';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '3600s' },
      }),
    }),
    TypeOrmModule.forFeature([UsersEntity]),
  ],
  providers: [UsersService, JwtGuard, JwtStrategy, UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
