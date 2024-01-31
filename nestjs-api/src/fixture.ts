import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);
  
  const productRepo = dataSource.getRepository('product');
  await productRepo.insert([
    {
        id: "38fe85d4-5978-458e-ad08-1e665cafcb41",
        name: "Product 2",
        description: "Description 2",
        price: 1700,
        image_url: "http://localhost:9000/products/2.png"
    },
    {
        id: "7c1806c3-3e7c-42cb-a24b-d3c5e3081b0f",
        name: "Product 3",
        description: "Description 3",
        price: 1800,
        image_url: "http://localhost:9000/products/3.png"
    },
    {
        id: "9fa29e2d-54d9-419a-93c1-92b3f3280bc9",
        name: "Product 4",
        description: "Description 4",
        price: 1900,
        image_url: "http://localhost:9000/products/4.png"
    },
    {
        id: "e7a328b9-27db-41a3-9f3d-0a8729867ab7",
        name: "Product 5",
        description: "Description 5",
        price: 2000,
        image_url: "http://localhost:9000/products/5.png"
    },
    {
        id: "fb7f10e4-5a13-4e7b-92d1-8cb798d6a2ee",
        name: "Product 6",
        description: "Description 6",
        price: 2100,
        image_url: "http://localhost:9000/products/6.png"
    },
    {
        id: "21a0d77e-3e45-4e2b-89a3-5759a18431e5",
        name: "Product 7",
        description: "Description 7",
        price: 2200,
        image_url: "http://localhost:9000/products/7.png"
    },
    {
        id: "b4a1a8cc-78e9-4ec7-95a3-d4514a97a6dd",
        name: "Product 8",
        description: "Description 8",
        price: 2300,
        image_url: "http://localhost:9000/products/8.png"
    },
    {
        id: "d3c98fc1-1d49-45cd-b67c-8cb1c2f39f5e",
        name: "Product 9",
        description: "Description 9",
        price: 2400,
        image_url: "http://localhost:9000/products/9.png"
    },
    {
        id: "ed7e166e-05b9-4da3-96ce-0c1071600e2e",
        name: "Product 10",
        description: "Description 10",
        price: 2500,
        image_url: "http://localhost:9000/products/10.png"
    },
    {
        id: "0a617ec5-3ce4-4e50-a23f-12a1f3b62d72",
        name: "Product 11",
        description: "Description 11",
        price: 2600,
        image_url: "http://localhost:9000/products/11.png"
    },
    {
        id: "5204db3b-38a8-4a24-936a-9b68e7fbb7df",
        name: "Product 12",
        description: "Description 12",
        price: 2700,
        image_url: "http://localhost:9000/products/12.png"
    },
    {
        id: "4e87f42a-7195-4fc8-982d-4da826667b3f",
        name: "Product 13",
        description: "Description 13",
        price: 2800,
        image_url: "http://localhost:9000/products/13.png"
    },
    {
        id: "6f9ec245-361e-4f64-a7d8-af3d534c4e62",
        name: "Product 14",
        description: "Description 14",
        price: 2900,
        image_url: "http://localhost:9000/products/14.png"
    },
    {
        id: "2f034856-4c8a-4d6d-b8db-6e1e2e3e9e08",
        name: "Product 15",
        description: "Description 15",
        price: 3000,
        image_url: "http://localhost:9000/products/15.png"
    }
]);

await app.close();
}
bootstrap();
