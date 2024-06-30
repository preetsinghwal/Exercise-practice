import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit{

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      skills: this.fb.array([this.createSkill()]) // Initialize with one skill input
    });
  }

  // Getter for the skills FormArray
  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  // Method to create a FormGroup for a new skill
  createSkill(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required] // Each skill has a 'skillName' FormControl with Validators.required
    });
  }

  // Method to add a new skill FormGroup to the skills FormArray
  addSkill(): void {
    this.skills.push(this.createSkill());
  }

  // Method to remove a skill FormGroup from the skills FormArray at the specified index
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      // Reset the skills FormArray to initial state with one skill input
      this.skills.clear();
      this.skills.push(this.createSkill());

      // Reset the entire form (optional)
      this.form.reset();
    } else {
      // Mark all fields as touched to display validation errors
      this.form.markAllAsTouched();
    }
  }

}
