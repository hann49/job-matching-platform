import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('apply/:jobId')
  async apply(@Request() req, @Param('jobId') jobId: string) {
    return this.applicationsService.apply(req.user.id, +jobId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('my')
  async getMyApplications(@Request() req) {
    return this.applicationsService.getMyApplications(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('job/:jobId')
  async getJobApplications(@Param('jobId') jobId: string) {
    return this.applicationsService.getJobApplications(+jobId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.applicationsService.updateStatus(+id, status);
  }
}
