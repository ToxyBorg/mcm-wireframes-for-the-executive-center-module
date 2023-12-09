import { BloodTypes, MedicalConditionResolutionStatus, StaffMemberDepartment, JobTitle } from "@/Components/Shared/ModalComponent/ModalComponentData";

import { faker } from '@faker-js/faker';


export const callPriorities = ["Low", "Medium", "High"];
export const shifts = ["Morning", "Afternoon", "Night"];

export const callTypes = [
    "Emergency Call",
    "Check-up Call",
    "Routine Call",
];

interface generateStaffProps {
    numberOfStaff: number;
    jobTitle?: JobTitle;
    random?: boolean
}
// Generate staff
export const generateStaff = (props: generateStaffProps) => {
    const generate_Nurses = Array.from(
        { length: props.numberOfStaff },
        () => {
            const dob = faker.date.past({
                years: 70,
                refDate: new Date(2000, 0, 1),
            });

            const age = new Date().getFullYear() - dob.getFullYear();

            return {
                id: faker.string.uuid(),
                name: faker.person.fullName(),
                dob: dob.toLocaleDateString(),
                age: age,
                address: faker.location.streetAddress(),
                profilePictureURL: faker.image.avatar(),
                joinedDate: faker.date
                    .past({ years: 1 })
                    .toLocaleDateString(),

                department: faker.string.fromCharacters(staffingDepartments),
                bloodType: faker.string.fromCharacters(bloodTypes),
                jobTitle: props.random ? faker.string.fromCharacters(staffJobTitle) : props.jobTitle,
            }
        }
    );

    return generate_Nurses

}

interface generatePatientsProps {
    numberOfPatients: number
}

// Generate patients
export const generatePatients = (props: generatePatientsProps) => {
    const generate_patients = Array.from(
        { length: props.numberOfPatients },
        () => {
            const dob = faker.date.past({
                years: 70,
                refDate: new Date(2000, 0, 1),
            });

            const age = new Date().getFullYear() - dob.getFullYear();

            return {
                id: faker.string.uuid(),
                name: faker.person.fullName(),
                dob: dob.toLocaleDateString(),
                age: age,
                address: faker.location.streetAddress(),
                profilePictureURL: faker.image.avatar(),
                bloodType: faker.string.fromCharacters(bloodTypes),
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
                )
            }
        }
    );

    return generate_patients

}


interface generateNurseCallsProps {
    period: "Last 7 Days" | "Last Year"
}

export const generateNurseCalls = (props: generateNurseCallsProps) => {
    const shift = faker.string.fromCharacters(shifts);

    let date = props.period === "Last 7 Days" ? faker.date.recent({ days: 7 }) :
        faker.date.past({ years: 1 });

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

    const resolutionTime = `${faker.number.int({ min: 1, max: 60 })} min`

    const callType = faker.string.fromCharacters(callTypes)
    const room = faker.number.int({ min: 100, max: 500 })
    const callPriority = faker.string.fromCharacters(callPriorities)
    const callDescription = faker.lorem.sentence()
    const resolutionDescription = faker.lorem.sentence()

    return {
        date: dateString,
        time: timeString,
        shift: shift,
        callResolutionTime: resolutionTime,
        callType: callType,
        room: room,
        callPriority: callPriority,
        callDescription: callDescription,
        resolutionDescription: resolutionDescription,
    }


}

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