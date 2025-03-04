package com.usermanager.usercrud.service;

import com.usermanager.usercrud.model.Users;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public Users saveUser(Users user);

    public List<Users> getAllUsers();

    public Optional<Users> getById(Integer id);

    public String deleteByUserId(Integer id);

    public Users updateUser(Integer id, Users newUser);
}
