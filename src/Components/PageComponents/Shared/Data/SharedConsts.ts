import { BloodTypes, MedicalConditionResolutionStatus, StaffMemberDepartment, JobTitle, StaffInfo, PatientInfo } from "@/Components/Shared/ModalComponent/ModalComponentData";

import { faker } from '@faker-js/faker';


export const callPriorities = ["Low", "Medium", "High"];
export const shifts = ["Morning", "Afternoon", "Night"];

export const callTypes = [
    "Emergency Call",
    "Check-up Call",
    "Routine Call",
];

export const bloodTypes: Array<BloodTypes> = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
];
export const medicalConditions = ["Condition 1", "Condition 2", "Condition 3"];
export const medicalConditionResolutionStatus: Array<MedicalConditionResolutionStatus> =
    ["Yes", "No", "On-going"];

export const staffingDepartments: Array<StaffMemberDepartment> = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Radiology",
    "Gastroenterology",
];
export const staffJobTitle: Array<JobTitle> = [
    "Doctor",
    "Nurse",
    "Technician",
    "Administrative",
    "Pharmacist",
    "Other",
];

interface generateNurseCallsProps {
    period?: "Last 7 Days" | "Last 30 Days" | "Last Year"
    date?: Date
}
export interface generateNurseCallsPropsReturn {

    date: string,
    callTime: string,
    shift: string,
    // callResolutionTimeString: string,
    callResolutionTime: number,
    callType: string,
    room: number,
    callPriority: string,
    callDescription: string,
    resolutionDescription: string,

}

export const generateNurseCalls = (props: generateNurseCallsProps): generateNurseCallsPropsReturn => {
    const shift = faker.string.fromCharacters(shifts);

    let date: Date = new Date

    if (props.date) {
        date = props.date
    }
    else {
        switch (props.period) {

            case "Last 7 Days":
                date = faker.date.recent({ days: 7 })
                break
            case "Last 30 Days":
                date = faker.date.recent({ days: 30 })
                break
            case "Last Year":
                date = faker.date.past({ years: 1 });
                break

        }
    }



    switch (shift) {
        case "Morning":
            date.setHours(faker.number.int({ min: 6, max: 12 }));
            break;
        case "Afternoon":
            date.setHours(faker.number.int({ min: 12, max: 18 }));
            break;
        case "Night":
            date.setHours(faker.number.int({ min: 18, max: 24 }));
            break;
    }
    const dateString = date.toLocaleDateString("fr-FR");
    const timeString = date.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const resolutionTime = faker.number.int({ min: 1, max: 120 })
    // const resolutionTimeString = `${resolutionTime} min`

    const callType = faker.string.fromCharacters(callTypes)
    const room = faker.number.int({ min: 100, max: 500 })
    const callPriority = faker.string.fromCharacters(callPriorities)
    const callDescription = faker.lorem.sentence()
    const resolutionDescription = faker.lorem.sentence()

    return {

        date: dateString,
        callTime: timeString,
        shift: shift,
        // callResolutionTimeString: resolutionTimeString,
        callResolutionTime: resolutionTime,
        callType: callType,
        room: room,
        callPriority: callPriority,
        callDescription: callDescription,
        resolutionDescription: resolutionDescription,

    }


}


interface generateStaffProps {
    numberOfStaff: number;
    jobTitle?: JobTitle;
    random?: boolean
}
// Generate staff
export const generateStaff = (props: generateStaffProps) => {
    const generate_Nurses = Array.from(
        { length: props.numberOfStaff },
        (): Partial<StaffInfo> => {
            const dob = faker.date.past({
                years: 70,
                refDate: new Date(2000, 0, 1),
            });

            const age = new Date().getFullYear() - dob.getFullYear();

            return {
                id: faker.string.uuid(),
                modalTitle: "Staff Info",
                staffName: faker.person.fullName(),
                staffDob: dob.toLocaleDateString(),
                staffAge: age,
                staffAddress: faker.location.streetAddress(),
                staffProfilePictureURL: faker.image.avatar(),
                joinedDate: faker.date
                    .past({ years: 1 })
                    .toLocaleDateString(),

                department: faker.string.fromCharacters(staffingDepartments) as StaffMemberDepartment,
                staffBloodType: faker.string.fromCharacters(bloodTypes) as BloodTypes,
                jobTitle: props.random ? faker.string.fromCharacters(staffJobTitle) as JobTitle :
                    props.jobTitle ? props.jobTitle : "Nurse",

            }
        }
    );

    return generate_Nurses as StaffInfo[]

}

interface generatePatientsProps {
    numberOfPatients: number
}

// Generate patients
export const generatePatients = (props: generatePatientsProps) => {
    const generate_patients = Array.from(
        { length: props.numberOfPatients },
        (): Partial<PatientInfo> => {
            const dob = faker.date.past({
                years: 70,
                refDate: new Date(2000, 0, 1),
            });

            const age = new Date().getFullYear() - dob.getFullYear();

            return {
                id: faker.string.uuid(),
                modalTitle: "Patient Info",
                patientName: faker.person.fullName(),
                patientDob: dob.toLocaleDateString(),
                patientAge: age,
                patientAddress: faker.location.streetAddress(),
                patientProfilePictureURL: faker.image.avatar(),
                patientBloodType: faker.string.fromCharacters(bloodTypes) as BloodTypes,
                insuranceName: faker.company.name(),
                medicalHistory: Array.from(
                    { length: faker.number.int({ min: 1, max: 5 }) },
                    () => ({
                        condition: faker.string.fromCharacters(medicalConditions),
                        occurredOn: faker.date
                            .past({ years: 10 })
                            .toLocaleDateString(),
                        diagnosis: faker.lorem.sentence(),

                        treated: faker.string.fromCharacters(
                            medicalConditionResolutionStatus
                        ) as MedicalConditionResolutionStatus,

                        admittedHere: faker.string.fromCharacters(
                            medicalConditionResolutionStatus
                        ) as MedicalConditionResolutionStatus,
                    })
                ),

            }
        }
    );

    return generate_patients as PatientInfo[]

}




