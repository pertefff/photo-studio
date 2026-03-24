import { Datagrid, DeleteButton, Edit, List, SimpleForm, TextField, TextInput, useRecordContext } from "react-admin";

const QuestionTitle = () => {
    const record = useRecordContext();
    return <span>Вопрос {record ? `от пользователя ${record.name}` : ''}</span>;
};

export const QuestionsList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="name" label="Имя" />
                <TextField source="email" label="E-mail" />
                <TextField source="question" label="Вопрос" />
                {/* <EditButton /> */}
                <DeleteButton />
            </Datagrid>
        </List>
    )
};

export function QuestionsEdit(props) {
    return (
        <Edit title={<QuestionTitle />} {...props}>
            <SimpleForm>
                <TextInput source="name" label="Имя" fullWidth />
                <TextInput source="question" label="Вопрос" fullWidth />
                <TextInput source="email" label="E-mail" fullWidth />
            </SimpleForm>
        </Edit>
    )
}
