import { Component, OnInit } from '@angular/core';
import { ArcApiDTOService } from '../../services/arc-api-dto/arc-api-dto.service';
import { map, Observable } from 'rxjs';
import { ArcData } from '../../models/arc-data.inferface';

@Component({
  selector: 'app-arc-data',
  templateUrl: './arc-data.component.html',
  styleUrls: ['./arc-data.component.sass']
})
export class ArcDataComponent implements OnInit {
  arcData: Observable<string> = this.arcApiDTO.getData().pipe(
    map((data: ArcData[]) => JSON.stringify(data))
  );
  constructor(private arcApiDTO: ArcApiDTOService) { }

  ngOnInit(): void {
  }

}
