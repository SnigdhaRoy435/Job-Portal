'use strict'
const Database = use('Database');
const Helpers = use('Helpers');

class JobController {
    async postJob({ response, request }) {
        const job = await Database.select('*').from('jobs');

        return response.json({
            job: job
        })
    }

    async drop({ response, request }) {
        const job = await Database.select('*').from('jobs');

        const filetype = request.file('image').subtype;
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
        }

        await Database.table('jobs').insert({
            user_id: request.input('user_id'),
            title: request.input('title'),
            description: request.input('description'),
            image: imageName,
            //image: request.input('image'),
            qualification: request.input('qualification'),
            experience: request.input('experience')
        });

        return response.redirect('/')

    }

    async view({ response, request, params }) {
        const jobs = await Database.select('*').from('jobs').where('user_id', params.id);

        return response.json({
            jobs: jobs
        })
    }

    async show({ response, request, params }) {
        const jobs = await Database.select('*').from('jobs').where('id', params.id);


        return response.json({
            jobs: jobs,
            //job: job
        })
    }

    async display({ request, response }) {
        const jobs = await Database.select('*').from('jobs');

        return response.json({
            jobs: jobs
        })
    }

    async slug({ request, response, params }) {
        //const job = await Database.select('user_id').from("jobs").where('id', params.id)
        const jobs = await Database.select('title').from('jobs').where('title', params.title)

        return response.json({
            //job: job,
            jobs: jobs
        })
    }


}

module.exports = JobController
