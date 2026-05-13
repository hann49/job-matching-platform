import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getMyProfile(@Request() req) {
    return this.profilesService.getProfile(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('me')
  async updateMyProfile(@Request() req, @Body() body) {
    return this.profilesService.createOrUpdateProfile(req.user.id, body);
  }
}
