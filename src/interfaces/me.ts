/**
 * MIT License
 *
 * Copyright (c) 2025 Josimar Silva
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export type Skills = {
  id: string;
  title: string;
  skills: Skill[];
};

export type Skill = {
  id: string;
  name: string;
  level: number;
  years: string;
};

export type Experience = {
  company: string;
  website: string;
  position: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements?: string[];
  technologies: string[];
};

export type Degree = {
  institution: string;
  degree: string;
  description: string;
  location: string;
  period: string;
  coursework?: string[];
  achievements?: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  credentialId?: string;
};

export type Education = {
  degrees: Degree[];
  certifications: Certification[];
};
