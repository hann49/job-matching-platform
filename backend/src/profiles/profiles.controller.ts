import { Controller, Get, Post, Delete, Body, Param, Request, UseGuards } from '@nestjs/common';
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

  @UseGuards(AuthGuard('jwt'))
  @Post('skills')
  async addSkill(@Request() req, @Body('skill') skill: string) {
    return this.profilesService.addSkill(req.user.id, skill);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('skills/:skill')
  async removeSkill(@Request() req, @Param('skill') skill: string) {
    return this.profilesService.removeSkill(req.user.id, skill);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('skills')
  async getSkills(@Request() req) {
    return this.profilesService.getSkills(req.user.id);
  }
}