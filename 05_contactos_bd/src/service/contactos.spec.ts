import { Test, TestingModule } from '@nestjs/testing';


import { Repository } from 'typeorm';
import { ContactosService } from './contactos.service';
import { Contacto } from 'src/model/Contacto';


describe('ContactosService', () => {
  let service: ContactosService;
  let repo: jest.Mocked<Repository<Contacto>>;

  const mockContactos: Contacto[] = [
    { idContacto: 1, nombre: 'Ana', email:'e1@gmail.com',telefono:'1111'},
    { idContacto: 2, nombre: 'Mar', email:'e2@gmail.com',telefono:'2222'},
  ];

  const mockRepository = {
    find: jest.fn().mockResolvedValue(mockContactos),
    findOneBy: jest.fn().mockImplementation((nombre: string) =>
      Promise.resolve(mockContactos.find(cont => cont.nombre === nombre)),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactosService,
        {
          provide: Repository<Contacto>,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ContactosService>(ContactosService);
    repo = module.get(Repository<Contacto>);
  });

  it('should return all users', async () => {
    const users = await service.findAll();
    expect(users).toEqual(mockContactos);
    expect(repo.find).toHaveBeenCalled();
  });

  it('should return one user by id', async () => {
    const contacto = await service.findByNombre("Ana")
    expect(contacto).toEqual(mockContactos[0]);
    expect(repo.findOneBy).toHaveBeenCalledWith("Ana");
  });
});