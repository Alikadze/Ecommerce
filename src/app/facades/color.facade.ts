import { Injectable, inject } from "@angular/core";
import { map } from "rxjs";
import { Category } from "../core/interfaces/category";
import { ColorService } from "../services/color.service";

@Injectable({
  providedIn: 'root'
})
export class ColorFacade {
  colorService = inject(ColorService)

  getColors() {
    return this.colorService.getColors()
      .pipe(
        map((color: any) => {
          return Object.keys(color).map(key => ({
            ...color[key],
            id: key
          }) as Category )
        })
      )
  }

  getColorById(id: string) {
    return this.colorService.getColorById(id);
  }

}