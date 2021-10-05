'use strict'
const Database = use('Database')
const Helpers = use('Helpers');

class ApplyController {
    async view({ resquest, response }) {
        const apply = await Database.select('*').from('applies');

        return response.json({
            apply: apply
        })
    }

    async store({ response, request }) {
        //const job = await Database.select('*').from('jobs');
        const apply = await Database.select('*').from('applies');

        /* const filetype = request.file('image').subtype;
         const imageName = `${new Date().getTime()}.${filetype}`;
 
         const imageUpload = request.file('image', {
             type: ['image'],
             size: '2mb'
         })
 
         await imageUpload.move(Helpers.publicPath('uploads'), {
             name: imageName
         });
 
         if (!imageUpload.move()) {
             return imageUpload.error()
         }*/

        await Database.table('applies').insert({
            user_id: request.input('user_id'),
            job_id: request.input('job_id'),
            app_id: request.input('app_id'),
            name: request.input('name'),
            title: request.input('title'),
            fatherName: request.input('fatherName'),
            biography: request.input('biography'),
            // image: imageName,
            //image: request.input('image'),
            qualification: request.input('qualification'),
            experience: request.input('experience'),
            dob: request.input('dob'),
            yoq: request.input('yoq'),
            mobile: request.input('mobile'),
            email: request.input('email')
        });

        return response.redirect('/')

    }
    async show({ response, request, params }) {
        const applies = await Database.select('*').from('applies').where('job_id', params.id);
        //const apply = await Database.select('job_id').from('applies').where('job_id', 'applies.id')

        return response.json({
            applies: applies,
            //apply: apply
        })
    }

    async display({ response, request, params }) {
        const apply = await Database.select('*').from('applies').where('app_id', params.id);

        return response.json({
            apply: apply
        })
    }

    async userId({ response, request, params }) {
        const userId = await Database.select('*').from('applies').where('user_id', params.id);

        return response.json({
            userId: userId
        })
    }
}

module.exports = ApplyController
