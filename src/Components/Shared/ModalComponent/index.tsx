// ModalComponent index.tsx

"use client";

import {
	Avatar,
	Divider,
	Group,
	Modal,
	Paper,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import {
	ModalComponentProps,
	PatientInfo,
	StaffInfo,
} from "./ModalComponentData";
import React from "react";

export const ModalComponent = (props: ModalComponentProps) => {
	if (props.modalTitle === "Staff Info") {
		const staffProps = props as StaffInfo;
		return <StaffModal {...staffProps} />;
	} else if (props.modalTitle === "Patient Info") {
		const patientProps = props as PatientInfo;
		return <PatientModal {...patientProps} />;
	}

	return (
		<Modal
			opened={false}
			onClose={() => {}}
		>
			<Text>Empty Modal</Text>
		</Modal>
	);
};

const PatientModal = (props: PatientInfo) => {
	return (
		<Modal
			{...props.config}
			closeOnClickOutside
			centered
			title={props.modalTitle}
		>
			<Paper
				p='md'
				shadow='xs'
			>
				<Group justify='space-between'>
					<Avatar
						color='blue'
						radius='sm'
						src={props.patientProfilePictureURL}
						alt={props.patientName}
						size={"xl"}
					/>
					<Stack gap='xs'>
						<Title order={2}>{props.patientName}</Title>
						<Title order={5}>Date of Birth: {props.patientDob}</Title>
						<Title order={5}>Age: {props.patientAge}</Title>
						<Title order={5}>Address: {props.patientAddress}</Title>
					</Stack>
				</Group>

				<>
					<Divider
						my='xs'
						label='Patient Information'
						labelPosition='left'
					/>
					<Title order={6}>Blood Type: {props.patientBloodType}</Title>
					<Title order={6}>Insurance Name: {props.insuranceName}</Title>
					<Divider
						my='xs'
						label='Patient Medical History'
						labelPosition='left'
					/>
					{props.medicalHistory.map((history, index) => (
						<Paper
							shadow='xs'
							p='xl'
							key={index}
						>
							<Title order={5}>Condition: {history.condition}</Title>
							<Title order={5}>Occurred On: {history.occurredOn}</Title>
							<Title order={5}>Diagnosis: {history.diagnosis}</Title>
							<Title order={5}>Treated: {history.treated}</Title>
							<Title order={5}>Admitted Here: {history.admittedHere}</Title>
						</Paper>
					))}
				</>
			</Paper>
		</Modal>
	);
};
const StaffModal = (props: StaffInfo) => {
	return (
		<Modal
			{...props.config}
			closeOnClickOutside
			centered
			title={props.modalTitle}
		>
			<Paper
				p='md'
				shadow='xs'
			>
				<Group justify='space-between'>
					<Avatar
						color='blue'
						radius='sm'
						src={props.staffProfilePictureURL}
						alt={props.staffName}
						size={"xl"}
					/>
					<Stack gap='xs'>
						<Title order={2}>{props.staffName}</Title>
						<Title order={5}>Date of Birth: {props.staffDob}</Title>
						<Title order={5}>Age: {props.staffAge}</Title>
						<Title order={5}>Address: {props.staffAddress}</Title>
					</Stack>
				</Group>

				<>
					<Divider
						my='xs'
						label='Staff Information'
						labelPosition='left'
					/>
					<Title order={5}>Joined Date: {props.joinedDate}</Title>
					<Title order={5}>Department: {props.department}</Title>
					<Title order={5}>Job Title: {props.jobTitle}</Title>
				</>
			</Paper>
		</Modal>
	);
};
