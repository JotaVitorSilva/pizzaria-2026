import calabresa from '../assets/calabresa.jpg'
import marguerita from '../assets/marguerita.jpg'
import frango from '../assets/frango.jpg'

const pizzasData = [
          {
              id: 'p1',
              name: 'Pizza Marguerita',
              description: 'Molho de tomate, mussarela e manjericão',
              price: 45.00,
              image: (marguerita)
            }, 
            {
              id: 'p2',
              name: 'Pizza Calabresa',
              description: 'Molho de tomate, mussarela, calabresa e cebola.',
              price: 50.00,
              image: (calabresa)
            },
            {
              id: 'p3',
              name: 'Pizza Frango com Catupiry',
              description: 'Molho de tomate, mussarela, frango desfiado e catupiry',
              price: 55.00,
              image: (frango)
            },
        ];

        export default pizzasData;