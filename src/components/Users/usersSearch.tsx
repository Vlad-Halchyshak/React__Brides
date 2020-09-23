import React from 'react'
import { Formik, Form, Field } from "formik";
import { Filter } from "../../redux/Users_Reducer";
import { useSelector } from 'react-redux';
import { getUsersFilter } from '../../selectors/UsersSelector';

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};
type formType = {
  term: string;
  friend: FriendForm;
};
type FriendForm = 'true' | 'false' | 'null'

type props = {
  onFilterChanged: (filter: Filter) => void;
};
export const UsersSearch: React.FC<props> = (props) => {
  const filter = useSelector(getUsersFilter)
  const submit = (values: formType,{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filter: Filter = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
    }
    props.onFilterChanged(filter);
    setSubmitting(false);
  };

  return (
    <div className="search_friends">
      <Formik
        enableReinitialize
        initialValues={{
          term: filter.term,
          friend: String(filter.friend) as FriendForm,
        }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form_options">
              <Field type="text" name="term" />
              <Field name="friend" as="select">
                <option value="null">All</option>
                <option value="true"> followed</option>
                <option value="false"> unfollowed</option>
              </Field>
              <button type="submit" disabled={isSubmitting}>
                search
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
 
}


