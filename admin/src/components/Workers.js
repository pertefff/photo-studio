import { Grid } from "@mui/material";
import { ArrayInput, Create, Datagrid, DeleteButton, Edit, List, NumberField, NumberInput, SimpleForm, SimpleFormIterator, TextField, TextInput, minLength, regex, required, useRecordContext } from "react-admin";

const validateName = [required(), minLength(3), regex(/(?:\s|^)[\p{Alphabetic}]+(?:\s|$)/u, 'Имя не должно содержать цифры и специальные символы')]

const WorkerTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.profession} ${record.name}` : ''}</span>;
};

export const WorkersList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit" bulkActionButtons={false}>
                <TextField source="profession" label="Профессия" sortByOrder="DESC" />
                <TextField source="name" label="Имя" />
                <TextField source="info" label="Информация" />
                <TextField source="schedule" label="График" />
                <NumberField
                    source="salary"
                    label="Зар.плата"
                    locales={['ru']}
                    options={{
                        style: 'currency',
                        currency: 'RUB',
                    }}
                />
                {/* <DeleteButton /> */}
            </Datagrid>
        </List>
    )
};

export function WorkersEdit(props) {
    return (
        <Edit title={<WorkerTitle />} {...props}>
            <SimpleForm>
                <Grid container spacing={{ xs: 0, md: 3 }} alignItems="center" direction={"row"} >
                    <Grid item xs={12} md={6}>
                        <TextInput source="profession" label="Изменить профессию" validate={validateName} fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput source="name" label="Изменить имя" validate={validateName} fullWidth />
                    </Grid>
                </Grid>
                <TextInput source="info" label="Изменить информацию" multiline="true" fullWidth />
                <TextInput source="schedule" label="Изменить график" fullWidth />
                <NumberInput source="salary" label="Изменить зар.плату" />
                <ArrayInput source="works" label="Фото работ">
                    <SimpleFormIterator inline fullWidth>
                        <TextInput label="URL" fullWidth />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Edit>
    )
}

export function WorkersCreate(props) {
    return (
        <Create title={<WorkerTitle />} redirect='list' {...props}>
            <SimpleForm>
                <Grid container spacing={{ xs: 0, md: 3 }} alignItems="center" direction={"row"} >
                    <Grid item xs={12} md={6}>
                        <TextInput source="profession" label="Профессия" validate={validateName} fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput source="name" label="Имя" validate={validateName} fullWidth />
                    </Grid>
                </Grid>
                <TextInput source="info" label="Информация" multiline="true" fullWidth />
                <TextInput source="schedule" label="График" fullWidth />
                <NumberInput source="salary" label="Зар.плата" />
                <ArrayInput source="works" label="Фото работ">
                    <SimpleFormIterator inline fullWidth>
                        <TextInput label="URL" fullWidth />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    )
}