import React, {ChangeEvent, Component} from 'react';
import TextInput from "./TextInput";
import {Button, Form} from "react-bootstrap";
import '../DataForm.css'

interface IProps {
    id: number,
    links: Map<number, string>,
    setLinks: (links: Map<number, string>) => void,
    toggleLinksVisible: () => void
}

class LinkInput extends Component<IProps> {
    render() {
        return (
            <div>
                <Form.Row>
                    <TextInput name={"link"}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleLinkChange(this.props.id, "link", event.target.value)}/>
                    <Button className={"removeButton"} variant={'danger'} size={'sm'}
                            onClick={() => this.removeLinkInput(this.props.id)}>Remove</Button>
                </Form.Row>
            </div>
        );
    }

    handleLinkChange = (id: number, name: string, value: string) => {
        let link: string;
        if (!this.props.links.has(id)) {
            link = "";
        } else {
            // @ts-ignore
            link = this.props.links.get(id);
        }
        // @ts-ignore
        link = value;
        let copy: Map<number, string> = new Map<number, string>(this.props.links).set(id, link);
        this.props.setLinks(copy);
    };

    removeLinkInput = (id: number) => {
        let copy = new Map<number, string>(this.props.links);
        copy.delete(id);
        if (copy.size === 0) {
            this.props.toggleLinksVisible();
        }
        this.props.setLinks(copy);
    };
}

export default LinkInput;
