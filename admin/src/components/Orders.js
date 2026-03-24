import {
    AutocompleteArrayInput,
    ChipField, Create, Datagrid,
    DateField, DateInput, DeleteButton,
    Edit, List, ReferenceArrayField, ReferenceArrayInput, ReferenceField, ReferenceInput,
    SelectArrayInput,
    SelectInput, SimpleForm, SingleFieldList, TextField,
    TextInput, email, minLength, regex, required, useRecordContext
} from "react-admin";

const validateName = [required(), minLength(3), regex(/(?:\s|^)[\p{Alphabetic}]+(?:\s|$)/u, 'Имя не должно содержать цифры и специальные символы')]
const validateEmail = email();
const validatePhone = regex(/((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}/, "Неверный номер")

const OrderTitle = () => {
    const record = useRecordContext();
    return <span>Заказ {record ? `${record.date}` : ''}</span>;
};

const choices = [
    { name: 'Видеограф' },
    { name: 'Фотограф' },
    { name: 'Визажист' },
    { name: 'Стилист' },
];

export const OrdersList = (props) => {
    return (
        <List sort={{ field: 'date', order: 'DESC' }} {...props}>
            <Datagrid rowClick="edit">
                <DateField source="date" label="Дата" />
                <TextField source="name" label="Заказчик" />
                <ReferenceField source="hallId" reference="halls" label="Зал" emptyText="Missing hall">
                    <ChipField source="title" />
                </ReferenceField>
                <ReferenceArrayField source="workers" reference="workers" label="Помощники" >
                    <SingleFieldList>
                        <ChipField source="profession" />
                    </SingleFieldList>
                </ReferenceArrayField>
                {/* <DeleteButton /> */}
            </Datagrid>
        </List>
    )
};

export function OrdersEdit(props) {
    return (
        <Edit title={<OrderTitle />}  {...props}>
            <SimpleForm>
                <DateInput source="date" label="Изменить дату" fullWidth />
                <TextInput source="name" label="Изменить имя" fullWidth validate={validateName} />
                <TextInput source="phone" label="Изменить телефон" fullWidth validate={validatePhone} />
                <TextInput source="email" label="Изменить e-mail" fullWidth validate={validateEmail} />
                <ReferenceInput source="hallId" reference="halls" label="Изменить зал" fullWidth >
                    <SelectInput optionValue="_id" optionText="title" label="Изменить зал" fullWidth />
                </ReferenceInput>
                <ReferenceArrayInput source="workers" reference="workers" label="Изменить персонал">
                    <SelectArrayInput optionValue="_id" optionText="profession" label="Изменить персонал" fullWidth />
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    )
}

export function OrdersCreate(props) {
    return (
        <Create title={<OrderTitle />} redirect='list' {...props}>
            <SimpleForm>
                <DateInput source="date" label="Дата" fullWidth />
                <TextInput source="name" label="Имя" fullWidth validate={validateName} />
                <TextInput source="phone" label="Изменить телефон" fullWidth validate={validatePhone} />
                <TextInput source="email" label="Изменить e-mail" fullWidth validate={validateEmail} />
                <ReferenceInput source="hallId" reference="halls" label="Изменить зал" fullWidth >
                    <SelectInput optionValue="_id" optionText="title" label="Изменить зал" fullWidth />
                </ReferenceInput>
                <ReferenceArrayInput source="workers" reference="workers" label="Изменить персонал">
                    <SelectArrayInput optionValue="_id" optionText="profession" label="Изменить персонал" fullWidth />
                </ReferenceArrayInput>
            </SimpleForm>
        </Create>
    )
}

{/* <ReferenceField source="hallId" reference="halls" label="Зал" emptyText="Missing user">
                    <ChipField source="title" label="Зал"/> 
                </ReferenceField> */}
{/* <FunctionField
                    label="Персонал"
                    render={record => {
                        let array = ''
                        record.workers?.map(worker => {
                            array = array + worker.profession + ', '
                            return null
                        })
                        return <div>{array.slice(0, -2)} </div>
                    }}
                /> */}