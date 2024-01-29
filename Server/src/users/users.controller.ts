import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){

    }

    @Post()
    createUser(@Body() newUser: CreateUserDto): Promise<User>{
        return this.usersService.createUser(newUser)
    }

    @Get()
    getUsers(): Promise<User[]>{
        return this.usersService.getUsers()
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): Promise<User>{ //ParseIntPipe para convertir a integer, si no colocamos retorna el id como string
        // console.log(typeof id);
        
        return this.usersService.getUser(id)
    }

    @Delete(':id')
    deleUser(@Param('id', ParseIntPipe) id: number){
        this.usersService.deleteUser( id )
    }
}
