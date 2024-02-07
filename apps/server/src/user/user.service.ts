import { Injectable } from '@nestjs/common';
import {
  ICreateUserErr,
  ICreateUserRequest,
  ICreateUserResponse,
  IUpdateUserErr,
  IUpdateUserRequest,
  IUpdateUserResponse,
  IRemoveUserErr,
  IRemoveUserRequest,
  IRemoveUserResponse,
  IFindOneUserErr,
  IFindOneUserRequest,
  IFindOneUserResponse,
  IFindManyUserRequest,
  IFindManyUserErr,
} from './dto';
import { UserRepository } from './userRepository';

@Injectable()
export class UserService {
  userRepo: UserRepository;
  // constructor(private readonly userRepo: UserRepository) {}
  // private readonly organizationService: OrganizationService, // @Inject(forwardRef(() => OrganizationService)) // private readonly notificationService: NotificationService, // private readonly jwtService: JwtEncryptionService, // private readonly bcryptService: BcryptEncryptionService, // private readonly userRepository: UserRepository,

  async create(input: ICreateUserRequest) {
    // ): Promise<ICreateUserResponse | ICreateUserErr> {
    // return this.userRepo.create;
  }

  async findOne(
    input: IFindOneUserRequest,
  ): Promise<IFindOneUserResponse | IFindOneUserErr> {
    return {};
  }

  async findMany(
    input: IFindManyUserRequest,
  ): Promise<IFindOneUserResponse | IFindManyUserErr> {
    return {};
  }

  async update(
    payload: IUpdateUserRequest,
  ): Promise<IUpdateUserResponse | IUpdateUserErr> {
    return {};
  }

  async remove(
    input: IRemoveUserRequest,
  ): Promise<IRemoveUserResponse | IRemoveUserErr> {
    return {};
  }
}
