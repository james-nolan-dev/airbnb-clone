import {Component, inject, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ToolbarModule} from "primeng/toolbar";
import {MenubarModule} from "primeng/menubar";
import {CategoryComponent} from "./category/category.component";
import {AvatarComponent} from "./avatar/avatar.component";
import {DialogService} from "primeng/dynamicdialog";
import {MenuItem} from "primeng/api";
import {MenuModule} from "primeng/menu";
import {ToastService} from "../toast.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenubarModule,
    CategoryComponent,
    AvatarComponent,
    MenuModule
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  toastService = inject(ToastService);

  location = 'Anywhere';
  guests = 'Add guests';
  dates = 'Any week';

  // login () => this.authService.login();
  // logout () => this.authService.logout();
  currentMenuItems: MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.fetchMenu();
    this.toastService.send({severity: 'info', summary: 'Welcome to Airbnb'});
  }

  private fetchMenu() {
    return [
      {
        label: 'Sign up',
        styleClass: 'font-bold'
      },
      {
        label: 'Log in',
      }
    ]
  }
}

