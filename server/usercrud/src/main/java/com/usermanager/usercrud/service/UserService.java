package com.usermanager.usercrud.service;

import com.usermanager.usercrud.model.Users;

import java.util.List;

public interface UserService {

    public Users saveUser(Users user);

    public List<Users> getAllUsers();

}
