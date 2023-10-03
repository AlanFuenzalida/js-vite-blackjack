import { crearDeck } from './usecases/crear-deck';
import { deck, tipos, especiales } from '.';

deck = crearDeck(tipos, especiales);
