import { Grid } from "@mui/material";
import { Create, Datagrid, DeleteButton, Edit, List, NumberField, NumberInput, SimpleForm, TextField, TextInput, useRecordContext } from "react-admin";

const HallTitle = () => {
    const record = useRecordContext();
    return <span>Зал {record ? `"${record.title}"` : ''}</span>;
};

export const HallsList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit" bulkActionButtons={false}>
                <TextField source="title" label="Заголовок" />
                <TextField source="description" label="Описание" multiline="true" />
                <NumberField source="cost" label="Стоимость (руб/ч)"
                    locales={['ru']}
                    options={{
                        style: 'currency',
                        currency: 'RUB',
                    }} />
                {/* <DeleteButton /> */}
            </Datagrid>
        </List>
    )
};

export function HallsEdit(props) {
    return (
        <Edit title={<HallTitle />} {...props}>
            <SimpleForm>
                <Grid container spacing={{ xs: 0, md: 3 }} alignItems="center" direction={"row"} >
                    <Grid item xs={12} md={6}>
                        <TextInput source="title" label="Изменить название" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NumberInput source="cost" label="Изменить стоимость" fullWidth />
                    </Grid>
                </Grid>
                <TextInput source="description" label="Изменить описание" fullWidth multiline="true" />
                <TextInput source="img" label="Ссылка на фотографию" fullWidth />
            </SimpleForm>
        </Edit>
    )
}

export function HallsCreate(props) {
    return (
        <Create title={<HallTitle />} redirect='list' {...props}>
            <SimpleForm>
                <Grid container spacing={{ xs: 0, md: 3 }} alignItems="center" direction={"row"} >
                    <Grid item xs={12} md={6}>
                        <TextInput source="title" label="Название" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NumberInput source="cost" label="Стоимость" fullWidth />
                    </Grid>
                </Grid>
                <TextInput source="description" label="Описание" multiline="true" fullWidth />
                <TextInput source="img" label="Ссылка на фотографию" fullWidth />
            </SimpleForm>
        </Create>
    )
}