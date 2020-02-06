import React, {ChangeEvent} from 'react';
import TextInput from "./TextInput";
import DateInput from "./DateInput";

interface IProps {
    id: number,
    onChange: (id: number, name: string, value: string) => void,
    onRemoveClick: (id: number) => void
}

const ExperienceInput = (props: IProps) => (
    <div>
        <TextInput header={"Role:"} name={"role"} onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(props.id, "role", event.target.value)}/>
        <TextInput header={"Company:"} name={"company"} onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(props.id, "company", event.target.value)}/>
        <TextInput header={"City:"} name={"city"} onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(props.id, "city", event.target.value)}/>
        <TextInput header={"Country:"} name={"country"} onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(props.id, "country", event.target.value)}/>
        <DateInput header={"Since:"} name={"sinceDate"} onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(props.id, "sinceDate", event.target.value)}/>
        <DateInput header={"To (optional):"} name={"toDate"} onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(props.id, "toDate", event.target.value)}/>
        <button type={"button"} onClick={() => props.onRemoveClick(props.id)}>Remove</button>
    </div>
);

export default ExperienceInput;