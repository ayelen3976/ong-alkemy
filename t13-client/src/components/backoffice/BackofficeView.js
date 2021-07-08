import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BackofficeTitle from "./BackofficeTitle";
import Wrapper from "../wrapper/Wrapper";
import ListNews from "../newsList/ListNews";
import Profile from "../profile/Profile";
import ActivitiesForm from "../activitiesForm/ActivitiesForm";
import ListContacts from "../listContacts/ListContacts";
import ListActivities from "../listActivities/ListActivities";
import News from "../newsForm/News";
import { ScreenOrganization } from "../formEdition/ScreenOrganization";
import { TestimonialList } from "../backoffice/testimonials/TestimonialList";
import HomeEdit from "../homeForm/HomeEdit";
import TableContainer from "../tableListUsers/TableContainer";
import Testimonials from "../testimonialsForm/Testimonials";
import CategoriesContainer from "../categoriesForm/CategoriesContainer";
import ListCategories from '../listCategories/ListCategories';

const BackofficeView = ({ Role }) => {
  return (
    <Wrapper>
      <Switch>
        {Role === 1 ? (
          <>
          <Route path='/backoffice/news'>
          <ListNews />
        </Route>
            <Route path='/backoffice/agregar-testimonios'>
              <BackofficeTitle title='Agregar Testimonios' />
              <Testimonials />
            </Route>
            <Route exact path='/backoffice/formulario-categorias'>
              <CategoriesContainer />
            </Route>
            <Route path='/backoffice/formulario-categorias/:id'>
              <CategoriesContainer />
            </Route>
            <Route path='/backoffice/agregar-actividades'>
              <BackofficeTitle title='Agregar actividades' />
              <ActivitiesForm />
            </Route>
            <Route path='/backoffice/lista-contactos'>
              <BackofficeTitle title='Lista Contactos' />
              <ListContacts />
            </Route>
            <Route path='/backoffice/lista-actividades'>
              <ListActivities />
            </Route>
            <Route path='/backoffice/agregar-novedades'>
              <BackofficeTitle title='Agregar Novedades' />
              <News />
            </Route>
            <Route path='/backoffice/editar-organizacion'>
              <ScreenOrganization />
            </Route>
            <Route path='/backoffice/lista-testimonios'>
              <BackofficeTitle title='Lista de Testimonios' />
              <TestimonialList />
            </Route>
            <Route path='/backoffice/editar-home'>
              <BackofficeTitle title='Editar Home' />
              <HomeEdit />
            </Route>
            <Route path='/backoffice/usuarios'>
              <BackofficeTitle title='Usuarios' />
              <TableContainer />
            </Route>
            <Route path='/backoffice/miperfil'>
              <BackofficeTitle title='Mi Perfil' />
              <Profile />
            </Route>
            <Route path='/backoffice/lista-categorías'>
              <BackofficeTitle title='Lista de Categorías' />
              <ListCategories />
            </Route>
          </>
        ) : Role === 2 ? (
          <>
            <Route path='/backoffice/miperfil'>
              <BackofficeTitle title='Mi Perfil' />
              <Profile />
            </Route>
          </>
        ) : null}
        <Redirect to='/' />
      </Switch>
    </Wrapper>
  );
};

export default BackofficeView;
