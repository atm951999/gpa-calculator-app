/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 12 September 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular.
===========================================
*/

import { Injectable } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  studentIds: Array<number>;
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}


