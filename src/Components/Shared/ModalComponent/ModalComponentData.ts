// ModalComponentData.ts

"use client"

import { bloodTypes, medicalConditions, medicalConditionResolutionStatus, staffingDepartments, staffJobTitle, generateStaff, generateNurseCalls } from '@/Components/PageComponents/Data/SharedConsts';
import { faker } from '@faker-js/faker';
import { ModalProps } from "@mantine/core";
import { HeatMapValue } from '@uiw/react-heat-map';

interface DefaultModalInfo {
    modalTitle: "Staff Info" | "Patient Info" | "Heat Map Calls Info"
    config: ModalProps
}

export type staffCallsType = {
    staff: StaffInfo,
    numberOfCalls: number,
    calls: {
        date: string,
        callType: string,
        room: number,
        callTime: string,
        callResolutionTime: string,

    }[]
}
export interface StaffCallsHeatMapCalendar extends DefaultModalInfo, HeatMapValue {
    staffCalls: staffCallsType[]
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
    id: string;
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
    id: string;
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

export type ModalComponentProps = StaffInfo | PatientInfo | StaffCallsHeatMapCalendar


export const StaffInfo_init = (inputs?: Partial<StaffInfo>): StaffInfo => {
    const defaults: StaffInfo = {
        id: faker.string.uuid(),
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
        id: faker.string.uuid(),
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

export const StaffCallsHeatMapCalendar_init = (inputs?: Partial<StaffCallsHeatMapCalendar>): StaffCallsHeatMapCalendar => {
    const currentYear = new Date().getFullYear();
    const currentDayOfYear = Math.floor((Date.now() - new Date(currentYear, 0, 1).getTime()) / (1000 * 60 * 60 * 24));
    const staffList = generateStaff({
        numberOfStaff: 10,
        jobTitle: "Nurse"
    });

    const count = faker.number.int({ min: 1, max: 60 });
    let remainingCalls = count;

    const dateString = faker.date.past({ years: 1 }).toISOString().split("T")[0]
    const defaults: StaffCallsHeatMapCalendar = {
        modalTitle: "Heat Map Calls Info",
        date: dateString,
        count: count,
        staffCalls: staffList.map((staff, staffCallIndex) => {

            let nurseCalls;

            // For the last nurse, assign all remaining calls
            if (staffCallIndex === staffList.length - 1) {
                nurseCalls = remainingCalls;
            } else {
                // Randomly assign calls to the nurse, but leave at least one call for each remaining nurse
                const maxCalls = Math.max(0, remainingCalls - (staffList.length - staffCallIndex - 1));
                nurseCalls = faker.number.int({ min: 0, max: maxCalls });
            }

            remainingCalls -= nurseCalls;

            return {

                staff: staff,
                numberOfCalls: nurseCalls,
                calls: Array.from({ length: nurseCalls }, () => {
                    const generatingNurseCall = generateNurseCalls({ date: new Date(currentYear, 0, Math.floor(Math.random() * currentDayOfYear)) });
                    return {
                        date: dateString,
                        callType: generatingNurseCall.callType,
                        room: generatingNurseCall.room,
                        callTime: generatingNurseCall.callTime,
                        callResolutionTime: generatingNurseCall.callResolutionTime,
                    };
                }),

            }
        }).filter(staffCall => staffCall.numberOfCalls > 0),
        config: {
            opened: false,
            onClose: () => { }
        }
    };

    return {
        ...defaults,
        ...inputs,
    } as StaffCallsHeatMapCalendar;
};