import React, {ChangeEvent} from 'react';
import TextInput from "./TextInput";

interface IProps {
    id: number,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const ExperienceInput = (props: IProps) => (
    <div>
        <div>
            <TextInput header={"Role:"} name={"role-" + props.id} onChange={props.onChange}/>
            <TextInput header={"Company:"} name={"company-" + props.id} onChange={props.onChange}/>
            <TextInput header={"City:"} name={"city-" + props.id} onChange={props.onChange}/>
            <TextInput header={"Country:"} name={"country-" + props.id} onChange={props.onChange}/>
            <TextInput header={"Since:"} name={"sinceDate-" + props.id} onChange={props.onChange}/>
            <TextInput header={"To:"} name={"toDate-" + props.id} onChange={props.onChange}/>
        </div>
    </div>
);

export default ExperienceInput;