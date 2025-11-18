import { Recipe } from './recipe';

export const dataRecipes: Recipe[] = [
  {
    id: 1,
    nombre: 'Ensalada César',
    image: 'assets/img/cesar.jpg',
    porcion: 2,
    tiempo: '15 min',
    ingredientes: [
      { nombre: 'lechuga romana', cantidad: 1 },
      { nombre: 'pechuga de pollo', cantidad: 200 },
      { nombre: 'queso parmesano', cantidad: 50 },
      { nombre: 'crutones', cantidad: 12 },
      { nombre: 'aderezo César', cantidad: 4 },
    ],
    pasos: [
      'Lavar y trocear la lechuga',
      'Cocinar el pollo y cortarlo en tiras',
      'Mezclar todo',
      'Agregar el aderezo y servir',
    ],
  },
  
];
