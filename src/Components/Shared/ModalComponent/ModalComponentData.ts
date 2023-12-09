// ModalComponentData.ts

"use client"

import { bloodTypes, medicalConditions, medicalConditionResolutionStatus, staffingDepartments, staffJobTitle } from '@/Components/PageComponents/Data/SharedConsts';
import { faker } from '@faker-js/faker';
import { ModalProps } from "@mantine/core";

interface DefaultModalInfo {
    modalTitle: "Staff Info" | "Patient Info"
    config: ModalProps
}

export type StaffMemberDepartment =
    "Cardiology" |
    "Neurology" |
    "Orthopedics" |
    "Radiology" |
    "Gastroenterology"

export type JobTitle =
    "Doctor" |
    "Nurse" |
    "Technician" |
    "Administrative" |
    "Pharmacist" |
    "Other"


export interface StaffInfo extends DefaultModalInfo {
    staffName: string;
    staffDob: string;
    staffAge: number;
    staffAddress: string;
    staffProfilePictureURL: string;
    staffBloodType: BloodTypes;
    joinedDate: string;
    department: StaffMemberDepartment;
    jobTitle: JobTitle;
}

export type BloodTypes = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
export type MedicalConditionResolutionStatus = "Yes" | "No" | "On-going"

export interface PatientInfo extends DefaultModalInfo {
    patientName: string;
    patientDob: string;
    patientAge: number;
    patientAddress: string;
    patientProfilePictureURL: string;
    patientBloodType: BloodTypes;
    insuranceName: string;
    medicalHistory: {
        condition: string;
        occurredOn: string;
        diagnosis: string;
        treated: MedicalConditionResolutionStatus;
        admittedHere: MedicalConditionResolutionStatus;
    }[];
}

export type ModalComponentProps = StaffInfo | PatientInfo


export const StaffInfo_init = (inputs?: Partial<StaffInfo>): StaffInfo => {
    const defaults: StaffInfo = {
        modalTitle: "Staff Info",
        staffName: faker.person.fullName(),
        staffDob: faker.date.past({ years: 100, refDate: new Date(2000, 0, 1) }).toLocaleDateString(),
        staffAge: faker.number.int({ min: 1, max: 100 }),
        staffAddress: faker.location.streetAddress(),
        staffProfilePictureURL: faker.image.avatar(),
        staffBloodType: faker.string.fromCharacters(bloodTypes) as BloodTypes,
        joinedDate: faker.date.past({ years: 10 }).toLocaleDateString(),
        department: faker.string.fromCharacters(staffingDepartments) as StaffMemberDepartment,
        jobTitle: faker.string.fromCharacters(staffJobTitle) as JobTitle,
        config: {
            opened: false,
            onClose: () => { }
        }
    };

    return {
        ...defaults,
        ...inputs,
    } as StaffInfo;
};

export const PatientInfo_init = (inputs?: Partial<PatientInfo>): PatientInfo => {
    const defaults: PatientInfo = {
        modalTitle: "Patient Info",
        patientName: faker.person.fullName(),
        patientProfilePictureURL: faker.image.avatar(),
        patientDob: faker.date.past({ years: 100, refDate: new Date(2000, 0, 1) }).toLocaleDateString(),
        patientAddress: faker.location.streetAddress(),
        patientBloodType: faker.string.fromCharacters(bloodTypes) as BloodTypes,
        patientAge: faker.number.int({ min: 1, max: 100 }),
        insuranceName: faker.company.name(),
        medicalHistory: Array.from({ length: 2 }, () => ({
            condition: faker.string.fromCharacters(medicalConditions),
            occurredOn: faker.date.past({ years: 10 }).toLocaleDateString(),
            diagnosis: faker.lorem.sentence(),
            treated: faker.string.fromCharacters(medicalConditionResolutionStatus) as MedicalConditionResolutionStatus,
            admittedHere: faker.string.fromCharacters(medicalConditionResolutionStatus) as MedicalConditionResolutionStatus,
        })),
        config: {
            opened: false,
            onClose: () => { }
        }
    };

    return {
        ...defaults,
        ...inputs,
    } as PatientInfo;
};