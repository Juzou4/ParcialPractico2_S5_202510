import { TestBed , inject} from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RecipeService } from './recipe.service';

describe('Service: Recipe', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [RecipeService]
   });
 });

 it('should ...', inject([RecipeService], (service: RecipeService) => {
   expect(service).toBeTruthy();
 }));
});
