/* eslint-disable prettier/prettier */
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Body,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie with the id: ${id}`;
  }
  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'This will create a new movie';
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete a movie with the id: ${id}`;
  }
  @Put('/:id')
  update(@Param('id') id: string) {
    return `This will update a movie with the id: ${id}`;
  }
  @Patch('/:id')
  partialUpdate(@Param('id') id: string) {
    return `This will partially update a movie with the id: ${id}`;
  }
}
