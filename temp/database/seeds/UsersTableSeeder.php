<?php
use App\Models\Admin\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'Admin',
            'username'=>'admin',
            'email'=>'admin@colorgap.com',
            'role'=>1,
            'password'=>hash('sha1', 'admin'),
            'api_token'=>'test',
            'created_by'=>1,
            'updated_by'=>1
        ]);
        User::create([
            'name'=>'User',
            'username'=>'user',
            'email'=>'user@colorgap.com',
            'role'=>2,
            'password'=>hash('sha1', 'user'),
            'api_token'=>'test2',
            'created_by'=>1,
            'updated_by'=>1
        ]);
    }
}
