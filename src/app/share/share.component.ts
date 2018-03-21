import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.less']
})
export class ShareComponent implements OnInit {

  linkToShare: string;

  destinationEmail = '';

  constructor(
    private shareService: ShareService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.linkToShare = params.get('linkToShare');
    });
  }

  goBack(): void {
    this.location.back();
  }

  shareLink(): void {
    // TODO: validate destinationEmail and linkToShare
    this.shareService.share(this.destinationEmail, this.linkToShare)
      .subscribe(result => this.goBack());
  }

}
